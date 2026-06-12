import ContactUsInnerCard from "./contactUsInnerCard";

export default function ContactUsCard() {
  return (
    <div className="flex flex-row gap-10 w-full">
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
