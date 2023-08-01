import { memo, useState } from 'react';

export default function Memo() {
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  return (
    <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}}>
      <label>
        Name{': '}
        <input value={name} onChange={e => setName(e.target.value)} />
      </label><br/>
      <label>
        Address{': '}
        <input value={address} onChange={e => setAddress(e.target.value)} />
      </label><br/>
      <Greeting name={name} />
    </div>
  );
}

const Greeting = memo(function Greeting({ name }) {
  console.log("Greeting was rendered at", new Date().toLocaleTimeString());
  return <h3>Hello{name && ', '}{name}!</h3>;
});
