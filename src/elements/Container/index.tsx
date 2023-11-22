import { useDroppable } from '@dnd-kit/core';
import ContainerProps from './container.type';
import { Button } from '../Button';

const Container = ({
  id,
  children,
  title,
  description,
  onAddItem,
}: ContainerProps) => {
  const { setNodeRef } = useDroppable({
    id: id,
  });

  return (
    <div
      ref={setNodeRef}
      className='w-full h-full p-4 bg-gray-100 rounded-xl flex flex-col gap-y-4'
    >
      <div className="flex items-center justify-between">
        <div className="flex flex-col gap-y-1">
          <h1 className="text-gray-800 text-xl">{title}</h1>
          <p className="text-gray-400 text-sm">{description}</p>
        </div>
      </div>

      {children}
      <Button onClick={onAddItem}>
        Add Task
      </Button>
    </div>
  );
};

export default Container;