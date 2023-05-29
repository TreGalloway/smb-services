import { Fragment } from "react";
import { Typography, Card } from "../../themeprovider";

export default function HomeHeader() {
  return (
    <Fragment>
      <Card className="flex w-max gap-4">
        <div>
          {" "}
          <img
            className="h-full w-full"
            src="https://images.unsplash.com/photo-1621983209359-456e234c892a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
            alt="nature image"
          />
        </div>
        <div>
          <Typography variant="h1" className="text-center">
            SMB Services For Hire
          </Typography>
          <Typography variant="lead" className="text-center">
            25 Years of Experience
          </Typography>
        </div>
      </Card>
    </Fragment>
  );
}
