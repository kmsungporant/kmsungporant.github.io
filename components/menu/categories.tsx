import Link from "next/link";

const categories: { name: string; link: string }[] = [
  { name: "Home", link: "#hero" },
  { name: "About", link: "#about" },
  { name: "Portfolio", link: "#portfolio" },
  { name: "Timeline", link: "#timeline" },
  { name: "Contacts", link: "#contacts" },
];

export default function Categories({ menuIsOpen }) {
  return (
    <div className="hidden lg:block">
      <div className="flex flex-row gap-5 mr-5 text-xl font-semibold ">
        {categories.map((categories, i) => (
          <div key={i}>
            <button
              className={
                menuIsOpen
                  ? " text-light-secondary dark:text-dark-secondary hover:text-light-secondary/75 hover:dark:text-dark-secondary/75 hover:underline"
                  : " text-dark-secondary dark:text-light-secondary hover:text-dark-secondary/75 hover:dark:text-light-secondary/75 hover:underline"
              }
            >
              <Link href={categories.link}>{categories.name}</Link>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
