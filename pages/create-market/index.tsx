// import Calendar from "@/components/Calender";
import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";

export const metadata: Metadata = {
  title: "Next.js Create Market | TailAdmin - Next.js Dashboard Template",
  description:
    "This is Next.js Create Market page for TailAdmin  Tailwind CSS Admin Dashboard Template",
};

const CreateMarketPage = () => {
  return (
    <DefaultLayout>
      {/* <Calendar /> */}

      <div>
        <h2>
            Hello Worlld!
        </h2>
      </div>

    </DefaultLayout>
  );
};

export default CreateMarketPage;
