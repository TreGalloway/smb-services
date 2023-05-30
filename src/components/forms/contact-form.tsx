import { Card, Typography, Button } from "../../themeprovider";

import {
  PhoneArrowUpRightIcon,
  EnvelopeIcon,
} from "@heroicons/react/24/outline";

export default function Contact() {
  return (
    <Card className=" py-6 mx-auto max-w-screen-lg bg-blue-gray-50 shadow-none">
      <Typography variant="h4" color="blue-gray" className="text-center">
        Call or Email for a Quote
      </Typography>
      <div className="flex flex-col items-center">
        <div
          className="grid gap-4"
          style={{
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            justifyItems: "center",
          }}
        >
          <Button
            className="flex items-center gap-3"
            variant="gradient"
            size="lg"
          >
            <PhoneArrowUpRightIcon strokeWidth={2} className="h-5 w-5" />
            Call
          </Button>
          <Typography variant="h5">OR</Typography>
          <Button
            className="flex items-center gap-3"
            variant="gradient"
            size="lg"
          >
            <EnvelopeIcon strokeWidth={2} className="h-5 w-5" />
            Email
          </Button>
        </div>
      </div>
    </Card>
  );
}
