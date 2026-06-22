import ContactUsInnerCard from "./contactUsInnerCard";

export default function ContactUsCard() {
  return (
    <div className="grid w-full grid-cols-1 gap-5 pt-3 sm:grid-cols-2">
      <ContactUsInnerCard
        title="Quick Responses"
        icon="/response.png"
        text="We reply within 24 hours"
      />
      <ContactUsInnerCard
        title="Expert Support"
        icon="/customerSupport.png"
        text="We're here to help"
      />
    </div>
  );
}
