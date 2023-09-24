import AdminLayout from "@/Layouts/AdminLayout";
import { Suspense } from "react";
import FormTag from "./Form/FormPost";
import SecondaryLinkButton from "@/Components/SecondaryLinkButton";

const CreateTag = () => {
    return (
      <>
        <div className="flex justify-between items-center bg-white shadow-sm mb-5 p-6">
          <div className="text-lg font-bold text-zinc-900">Create Post</div>
          <SecondaryLinkButton href={route('admin.tag.index')}>
            Back
          </SecondaryLinkButton>
        </div>

        <div className="bg-white p-6 w-full">
          <Suspense fallback={'loading...'}>
            <FormTag />
          </Suspense>
        </div>
      </>
    );
  };

  CreateTag.layout = (page) => (
    <AdminLayout
      children={page}
      title={
        <h2 className="font-semibold text-xl text-gray-800 leading-tight">
          Create Tag
        </h2>
      }
      head={'Create Tag'}
    />
  )

export default CreateTag;
