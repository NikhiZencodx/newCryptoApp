import Image from 'next/image';

export default function InputGroup({ 
  placeholder, 
  type = 'text',
  icon,
  onChange 
}) {
  return (
    <div className="input-group flex items-center justify-between">
      <input 
        type={type}
        className="input-control"
        placeholder={placeholder}
        onChange={onChange}
      />
      {icon && (
        <button type="submit" className="input-btn flex items-center justify-center">
          <Image src={icon} alt="Submit" width={24} height={24} />
        </button>
      )}
    </div>
  );
}