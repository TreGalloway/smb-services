import { Card, Typography, Button } from "../../themeprovider";

import {
  PhoneArrowUpRightIcon,
  EnvelopeIcon,
} from "@heroicons/react/24/outline";

export default function Contact() {
  return (
    <Card className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
      <Typography variant="h4" color="blue-gray">
        Call or Email for a Quote
      </Typography>
      <div className="flex w-max gap-4">
        <Button
          className="flex items-center gap-3"
          variant="gradient"
          size="lg"
        >
          {" "}
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
    </Card>
  );
}
