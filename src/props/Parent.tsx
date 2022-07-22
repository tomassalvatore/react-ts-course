import { ChildAsFc } from './Child';

const Parent = () => {
  return (
    <ChildAsFc color='red' onClick={() => console.log('clicked')}>
      asdasda
    </ChildAsFc>
  );
};

export default Parent;
