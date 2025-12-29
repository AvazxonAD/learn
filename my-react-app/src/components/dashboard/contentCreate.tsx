import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '../ui/button';
import { FormEvent } from 'react';

export default function ContentCreate() {
  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
  };

  return (
    <div>
      <h1 className="text-3xl font-semibold">Article Writer</h1>
      <form action="" className="mt-4" onSubmit={handleSubmit}>
        <div className="grid w-full gap-3 mb-4">
          <Label htmlFor="title">Title</Label>
          <Input type="text" id="title" placeholder="Title" name="title" />
        </div>
        <div className="grid w-full gap-3 mb-4">
          <Label htmlFor="description">Description</Label>
          <Textarea
            placeholder="Type your description here."
            id="description"
          />
        </div>
        <Button>Generate</Button>
      </form>
    </div>
  );
}
