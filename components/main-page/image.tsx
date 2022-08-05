export default function ImageLogo() {
  return (
    <div className="flex flex-col items-end w-1/2 mx-24 ">
      <div className="block dark:hidden">
        <img src="/logo.png" alt="logo" width={500} height={500} />
      </div>
      <div className="hidden dark:block">
        <img src="/logoLight.png" alt="logo" width={500} height={500} />
      </div>
    </div>
  );
}
