import * as React from "react";

interface ContactEmailTemplateProps {
  firstName: string;
}

export function ContactEmailTemplate({ firstName }: ContactEmailTemplateProps) {
  return (
    <div>
      <h1>Welcome, {firstName}!</h1>
    </div>
  );
}
