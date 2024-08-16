import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const HeroSection = () => {
  return (
    <div>
      <div className=" mt-10 flex flex-row items-center justify-center px-[50px]">
        <div className="grid lg:grid-cols-2 gap-6 p-8">
          <div className=" flex flex-col justify-center p-10 gap-8">
            <h1 className=" text-5xl font-bold">
              Get treatment from the{" "}
              <span className=" text-purple-600">Best Doctors</span> here
            </h1>
            <p className=" tracking-wide">
              Say goodbye to long waiting times and endless phone calls – with
              our user-friendly platform, scheduling your next doctor's
              appointment is as easy as a few taps on your smartphone. Whether
              you're seeking routine check-ups, specialist consultations, or
              urgent care, our app connects you with a network of trusted
              healthcare providers in your area. Experience the future of
              healthcare booking today with our intuitive and reliable doctor
              appointment booking app.
            </p>
            <Link href={"/"}>
              <Button className=" bg-purple-600 hover:bg-purple-800 p-6 px-11">
                Get Started today
              </Button>
            </Link>
          </div>
          <div className=" p-10">
            <Image
              src="/doctor.jpg"
              width={600}
              height={500}
              alt="img"
              className="rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
