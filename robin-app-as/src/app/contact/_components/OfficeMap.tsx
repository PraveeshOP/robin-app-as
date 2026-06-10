export default function OfficeMap() {
  return (
    <div className="w-full h-[450px] overflow-hidden rounded-xl">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2506.9085431467292!2d10.92365057761925!3d59.96192047492694!2m3!1f0!2f0!3f0!2m3!1i1024!2i768!4f13.1!3m3!1m2!1s0x46417abeb5a4de2b%3A0x2cbebbad5e1ad4f6!2sStovner%20Senter%2026%2C%200985%20Oslo!5e1!3m2!1sen!2sno!4v1781096790528!5m2!1sen!2sno"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Office Location"
      />
    </div>
  );
}
