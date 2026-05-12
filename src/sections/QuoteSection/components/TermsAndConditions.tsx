import { BUSINESS_NAME } from "@/constants/site";

export const TermsAndConditions = () => {
  return (
    <div className="w-full max-w-[700px] mt-8">
      <div className="bg-black rounded-xl p-6 md:p-8 shadow-xl">
        <h3 className="text-2xl font-medium mb-6 text-white md:text-3xl">Terms &amp; Conditions</h3>

        <div className="space-y-6 text-white">
          <div>
            <h4 className="text-xl font-medium mb-3 text-white">Quotes &amp; estimates</h4>
            <p className="text-[15px] leading-6 text-white md:text-base">
              Written estimates summarise the proposed scope based on photos, measurements or site
              surveys. Pricing may be adjusted where access, stubborn staining, concealed damage or
              safety factors differ from what was quoted. You will always be consulted before extras
              are carried out.
            </p>
          </div>

          <div>
            <h4 className="text-xl font-medium mb-3 text-white">Access &amp; preparation</h4>
            <p className="text-[15px] leading-6 text-white md:text-base">
              You agree to provide safe parking, unobstructed ladder or reach access, mains water /
              drainage where quoted, and to secure pets during visits. Delayed access may shorten the
              time on site without reducing the quoted fee unless otherwise agreed.
            </p>
          </div>

          <div>
            <h4 className="text-xl font-medium mb-3 text-white">Payments</h4>
            <p className="text-[15px] leading-6 text-white md:text-base">
              Unless stated on your invoice, payment is due on completion via the methods we offer.
              Deposits, if requested, reserve diary time and materials and are deducted from your
              balance.
            </p>
          </div>

          <div>
            <h4 className="text-xl font-medium mb-3 text-white">Weather &amp; rescheduling</h4>
            <p className="text-[15px] leading-6 text-white md:text-base">
              Exterior washing may pause for high winds, electrical storms or ground-ice hazards.{" "}
              {BUSINESS_NAME} will reschedule as soon as it is practical and safe rather than risking
              your property or our crew.
            </p>
          </div>

          <div>
            <h4 className="text-xl font-medium mb-3 text-white">Cancellation</h4>
            <p className="text-[15px] leading-6 text-white md:text-base">
              Please give at least 48 hours’ notice where possible so we can reallocate the slot.
              Material orders or speciality hire may incur costs if bookings are cancelled shortly
              before work begins.
            </p>
          </div>

          <div>
            <h4 className="text-xl font-medium mb-3 text-white">Warranty &amp; liability</h4>
            <p className="text-[15px] leading-6 text-white md:text-base">
              We carry appropriate insurance documents on request and work to recognised safe methods.
              Decorative finishes vary by manufacturer—where surfaces are brittle, degraded or poorly
              applied we will flag limitations before commencing. Liability is capped to the invoiced
              value of affected work unless UK law dictates otherwise.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
