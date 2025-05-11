import { SubTitle, Title } from "@/components/Typography";

export default function WhatToDoPage() {
  return (
    <div className="w-screen h-screen bg-white text-black flex items-center">
      <div className="container mx-auto grid xl:grid-cols-2 md-grid-cols-1 gap-4 items-center">
        <div className="h-full grid">
          <Title text="What I Do?" className="text-pink-400" />
          <div className="grid items-baseline">
            <div>
              <SubTitle text="Events" className="text-pink-400 mb-4 md:mt-4" />
              <ul className="list-disc pl-6 text-base/8">
                <li>Pre-Event Planning </li>
                <li>Monitor the design </li>
                <li>Event Execution </li>
                <li>Catering</li>
                <li>Assign teams members</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="xl:pl-34">
          <SubTitle
            text="Client and Supplier Management"
            className="text-pink-400 mb-4 md:mt-4"
          />
          <ul className="list-disc pl-6 text-base/8 xl:mb-16 mb-8">
            <li>Client onboarding </li>
            <li>Samples and Service Management</li>
            <li>Contracts and Agreement Handling </li>
            <li>Manage reply</li>
            <li>Building relationships with both clients and suppliers</li>
            <li>Order and Samples Process </li>
          </ul>
          <SubTitle
            text="Social Media Marketing"
            className="text-pink-400  mb-4"
          />
          <ul className="list-disc pl-6 text-base/8">
            <li>Photographing </li>
            <li>Create content </li>
            <li>Boosting </li>
            <li>Website Analysis</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
