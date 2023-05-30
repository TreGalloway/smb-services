// import { Fragment } from "react";
// import { Typography, Card } from "../../themeprovider";

// export default function HomeHeader() {
//   return (
//     <Fragment>
//       <Card className="flex w-max gap-4">
//         <div>
//           {/* <img
//             className=" h-3/5 w-full rounded-lg"
//             src="https://images.unsplash.com/photo-1621983209359-456e234c892a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
//             alt="nature image"
//           /> */}
//         </div>
//         <div>
//           <Typography variant="h1" className="text-center">
//             SMB Services For Hire
//           </Typography>
//           <Typography variant="lead" className="text-center">
//             25 Years of Experience
//           </Typography>
//         </div>
//       </Card>
//     </Fragment>
//   );
// }
import React from "react";
import { Card, CardBody } from "../../themeprovider";

const CardWithImage = () => {
  return (
    <Card className="flex md:flex-row-reverse bg-blue-gray-50 shadow-none py-4">
      <div className="hidden md:block">
        <img
          src="https://images.unsplash.com/photo-1594348352429-159508d48c57?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1774&q=80"
          alt="Card Image"
          className="rounded-r-lg"
        />
      </div>
      <div className="md:hidden">
        <img
          src="https://images.unsplash.com/photo-1594348352429-159508d48c57?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1774&q=80"
          alt="Card Image"
        />
      </div>
      <CardBody>
        <h5 className="card-title">Card Title</h5>
        <p className="text-gray-700">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
          pellentesque, nunc id finibus blandit, urna mauris tincidunt arcu, vel
          vulputate sapien lorem eu neque. Etiam sed massa aliquam, bibendum
          augue non, bibendum velit. Donec euismod mauris ac risus scelerisque,
          vel lacinia quam tincidunt.
        </p>
      </CardBody>
    </Card>
  );
};

export default CardWithImage;
