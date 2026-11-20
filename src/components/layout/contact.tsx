"use client";
import { Label } from "@/components/ui/label";
import BackButton from "./back-button";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import Obfuscate from "react-obfuscate";

const Contact = () => {
  return (
    <div className="flex flex-col px-2 py-2">
      <BackButton></BackButton>
      <div className="flex flex-col mt-6 gap-3">
        <div className="text-3xl text-white">Shoot me a message</div>
        <p></p>
        <form
          action=""
          onSubmit={(e) => {
            e.preventDefault();
          }}
          className="gap-4 flex flex-col lg:w-[60%] w-full"
        >
          <div className="flex flex-col gap-2">
            <Label>Name</Label>
            <Input
              required={true}
              min={3}
              placeholder="peter"
              type="text"
            ></Input>
          </div>

          <div className="flex flex-col gap-2">
            <Label className="font-mono">Contact Email</Label>
            <Input
              required={true}
              min={4}
              type={"email"}
              className="border-bottom"
              placeholder="yagami@gmail.com"
            ></Input>
          </div>
          <div className="flex flex-col gap-2">
            <Label className="font-mono">Message</Label>
            <Textarea
              required={true}
              placeholder="Enter your message here..."
              className="border-bottom"
            />
          </div>
          <div>
            <Obfuscate
              email="hello@coston.io"
              headers={{
                subject: "react-obfuscate",
                body: "Down with the machines!",
              }}
            >
              <Button className="cursor-pointer">
                Send Message
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5"
                  />
                </svg>
              </Button>
            </Obfuscate>
          </div>
        </form>
      </div>
    </div>
  );
};
export default Contact;
