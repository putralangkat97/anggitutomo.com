import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { useForm } from '@inertiajs/react';
import MDEditor from '@uiw/react-md-editor';
import { useEffect, useState } from 'react';
import Select from 'react-select';

const FormPost = ({ tags }) => {
  const { data, setData, post, processing, errors, reset } = useForm({
    title: '',
    slug: '',
    content: '',
    tag: [],
  });

  const [value, setValue] = useState();

  const submit = (e) => {
    e.preventDefault();
    post(route('admin.post.store'), {
      preserveScroll: true,
      onSuccess: () => reset(),
    });
  };

  useEffect(() => {
    setData('content', value);
  }, [value]);

  useEffect(() => {
    setData('slug', slugTitle(data.title));
  }, [data.title]);

  const slugTitle = (value) => {
    let replaceSpace = value.replace(' ', '-');
    return replaceSpace.toLowercase();
  };

  return (
    <form onSubmit={submit}>
      <div className="grid grid-cols-1 grid-cols-2 gap-4">
        <div className="">
          <InputLabel htmlFor="title" value="Post Title" />

          <TextInput
            id="title"
            type="text"
            name="title"
            value={data.title}
            className="mt-1 block w-full"
            placeholder="Title"
            onChange={(e) => setData('title', e.target.value)}
          />

          <InputError message={errors.title} className="mt-2" />
        </div>

        <div>
          <InputLabel htmlFor="slug" value="Slug" />

          <TextInput
            id="slug"
            type="text"
            name="slug"
            value={data.slug}
            className="mt-1 block w-full bg-gray-100 cursor-not-allowed"
            readOnly
          />

          <InputError message={errors.slug} className="mt-2" />
        </div>

        <div className="col-span-2">
          <InputLabel htmlFor="tag" value="Tag" />

          <Select
            isMulti
            id="tag"
            options={tags}
            onChange={(e) => setData('tag', e)}
          />
          <input type="hidden" name="tag[]" value={data.tag} />

          <InputError message={errors.tag} className="mt-2" />
        </div>

        <div className="col-span-2">
          <InputLabel htmlFor="content" value="Content" />

          <div data-color-mode="light">
            <MDEditor
              height={280}
              value={value}
              onChange={(val) => setValue(val)}
            />
          </div>

          <InputError message={errors.content} className="mt-2" />
        </div>
      </div>

      <PrimaryButton className="mt-10" disabled={processing}>
        Submit
      </PrimaryButton>
    </form>
  );
};

export default FormPost;
