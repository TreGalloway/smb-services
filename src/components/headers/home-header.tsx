import React from "react";
import { Card, CardBody, Typography } from "../../themeprovider";

const CardWithImage = () => {
  return (
    <Card className="flex md:flex-row-reverse bg-blue-gray-50 shadow-none py-4 lg:justify-between">
      <div className="hidden md:block">
        <img
          src="https://images.unsplash.com/photo-1594348352429-159508d48c57?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1774&q=80"
          alt="Card Image"
          className="rounded-r-lg max-w-screen-sm"
        />
      </div>
      <div className="md:hidden ">
        <img
          src="https://images.unsplash.com/photo-1594348352429-159508d48c57?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1774&q=80"
          alt="Card Image"
          className="rounded-lg"
        />
      </div>
      <CardBody className="pr-6">
        <Typography variant="h3" className="md:hidden" color="blue-gray">
          SMB Services For Hire
        </Typography>
        <Typography variant="h1" className="hidden md:block">
          SMB Services For Hire
        </Typography>
        <p className="text-gray-700">No Job is Too Small</p>
        <p className="text-gray-700 ">25+ Years of Experience </p>
      </CardBody>
    </Card>
  );
};

export default CardWithImage;
