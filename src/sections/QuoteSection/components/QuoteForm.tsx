import { useState, useEffect } from "react";
import { services } from "../../../data/services";
import { SITE_URL, BUSINESS_NAME, FORMSPREE_ENDPOINT } from "@/constants/site";

const validServiceValues = new Set(services.map((s) => s.slug));

const inputClass =
  "w-full px-4 py-3 rounded-lg bg-[#1a1a1a] border border-white/12 text-white placeholder:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-[#7d8f52]/55 focus:border-[#7d8f52]";

function callGtag(eventName: string, category: string, label: string) {
  const gtag = typeof window !== "undefined" ? (window as unknown as { gtag?: (...a: unknown[]) => void }).gtag : undefined;
  if (typeof gtag === "function") {
    gtag("event", eventName, {
      event_category: category,
      event_label: label,
    });
  }
}

export const QuoteForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    postcode: "",
    house: "",
    service: "",
    description: "",
  });

  useEffect(() => {
    if (typeof window === "undefined") return;
    const params = new URLSearchParams(window.location.search);
    const serviceParam = params.get("service");
    if (serviceParam && validServiceValues.has(serviceParam)) {
      setFormData((prev) => ({ ...prev, service: serviceParam }));
    }
  }, []);

  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
  const [formStarted, setFormStarted] = useState(false);

  const trackFormStart = () => {
    if (!formStarted && typeof window !== "undefined") {
      setFormStarted(true);
      const pathname = window.location.pathname;
      let eventName = "formstart_contact";
      if (pathname.includes("/services")) {
        eventName = "formstart_service";
      }
      callGtag(eventName, "Form", pathname);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (!file.type.startsWith("image/")) {
        alert("Please select an image file");
        return;
      }
      if (file.size > 10 * 1024 * 1024) {
        alert("Image size must be less than 10MB");
        return;
      }
      setImageFile(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const removeImage = () => {
    setImageFile(null);
    setImagePreview(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const formDataToSend = new FormData();
      formDataToSend.append("name", formData.name);
      formDataToSend.append("email", formData.email);
      formDataToSend.append("phone", formData.phone);
      formDataToSend.append("postcode", formData.postcode);
      formDataToSend.append("house", formData.house);
      if (formData.service) {
        formDataToSend.append("service", formData.service);
      }
      formDataToSend.append("description", formData.description);
      formDataToSend.append("website", `${SITE_URL}/`);

      if (imageFile) {
        formDataToSend.append("image", imageFile);
      }

      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        body: formDataToSend,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        window.location.href = "/thank-you";
      } else {
        try {
          const errorData = await response.json();
          console.error("Form submission error:", errorData);
        } catch {
          console.error("Form submission failed");
        }
        setSubmitStatus("error");
        setIsSubmitting(false);
      }
    } catch {
      setSubmitStatus("error");
      setIsSubmitting(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      action={FORMSPREE_ENDPOINT}
      method="POST"
      encType="multipart/form-data"
      className="w-full flex flex-col gap-5"
    >
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-white">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            onFocus={trackFormStart}
            className={inputClass}
            placeholder="Name"
            autoComplete="name"
          />
        </div>
        <div>
          <label htmlFor="phone" className="mb-1.5 block text-sm font-medium text-white">
            Phone
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            required
            value={formData.phone}
            onChange={handleChange}
            className={inputClass}
            placeholder="Phone"
            autoComplete="tel"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-white">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            className={inputClass}
            placeholder="Email"
            autoComplete="email"
          />
        </div>
        <div>
          <label htmlFor="postcode" className="mb-1.5 block text-sm font-medium text-white">
            Post code
          </label>
          <input
            type="text"
            id="postcode"
            name="postcode"
            required
            value={formData.postcode}
            onChange={handleChange}
            className={inputClass}
            placeholder="Post code"
            autoComplete="postal-code"
          />
        </div>
      </div>

      <div>
        <label htmlFor="house" className="mb-1.5 block text-sm font-medium text-white">
          House number / name
        </label>
        <input
          type="text"
          id="house"
          name="house"
          required
          value={formData.house}
          onChange={handleChange}
          className={inputClass}
          placeholder="House number / name"
          autoComplete="street-address"
        />
      </div>

      <div>
        <label htmlFor="service" className="mb-1.5 block text-sm font-medium text-white">
          Service (optional)
        </label>
        <select
          id="service"
          name="service"
          value={formData.service}
          onChange={handleChange}
          className={`${inputClass} cursor-pointer appearance-none bg-[#1a1a1a] pr-10`}
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%239ca3af'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "right 0.75rem center",
            backgroundSize: "1.25rem",
          }}
        >
          <option value="">Select a service...</option>
          {services.map((svc) => (
            <option key={svc.slug} value={svc.slug}>
              {svc.title}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="description" className="mb-1.5 block text-sm font-medium text-white">
          Message
        </label>
        <textarea
          id="description"
          name="description"
          required
          rows={6}
          value={formData.description}
          onChange={handleChange}
          className={`${inputClass} resize-none min-h-[140px]`}
          placeholder="Message"
        />
      </div>

      <div>
        <label htmlFor="image" className="mb-1.5 block text-sm font-medium text-white">
          Photo (optional)
        </label>
        <input
          type="file"
          id="image"
          name="image"
          accept="image/*"
          onChange={handleImageChange}
          className="block w-full text-sm text-neutral-400 file:mr-4 file:rounded-lg file:border-0 file:bg-[#1a1a1a] file:px-4 file:py-2.5 file:text-sm file:font-medium file:text-white hover:file:bg-[#252525]"
        />
        {imagePreview && (
          <div className="relative mt-3">
            <img
              src={imagePreview}
              alt="Preview"
              className="h-40 w-full rounded-lg border border-white/12 object-cover"
            />
            <button
              type="button"
              onClick={removeImage}
              className="absolute right-2 top-2 rounded-full bg-red-600 px-3 py-1 text-sm font-medium text-white hover:bg-red-700"
              aria-label="Remove image"
            >
              Remove
            </button>
          </div>
        )}
      </div>

      <p className="text-xs leading-relaxed text-white/85">
        By submitting this form you agree to be contacted by {BUSINESS_NAME} about your enquiry.
      </p>

      {submitStatus === "error" && (
        <div className="rounded-lg border border-red-800/80 bg-red-950/40 p-4 text-sm text-red-200">
          There was an error submitting your request. Please try again.
        </div>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full rounded-lg bg-cta py-3.5 text-center text-base font-semibold text-white transition hover:bg-cta-dark focus:outline-none focus:ring-2 focus:ring-cta focus:ring-offset-2 focus:ring-offset-[#2d2d2d] disabled:cursor-not-allowed disabled:opacity-50"
      >
        {isSubmitting ? "Submitting…" : "Submit"}
      </button>
    </form>
  );
};
