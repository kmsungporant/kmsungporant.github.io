import { ReactNode } from "react";
import { AiFillFacebook, AiFillGithub, AiFillLinkedin, AiFillTwitterSquare } from "react-icons/ai";

export const Icons: {
  name: string;
  linkName: string;
  link: string;
  icon: ReactNode;
}[] = [
  {
    name: "Github",
    linkName: "github.com/kmsungporant",
    link: "https://github.com/kmsungporant/",
    icon: <AiFillGithub />,
  },
  {
    name: "Linkedin",
    linkName: "linkedin/kmsungporant",
    link: "https://www.linkedin.com/in/kmsungporant/",
    icon: <AiFillLinkedin />,
  },

  {
    name: "Facebook",
    linkName: "facebook/kmsungporant",
    link: "https://www.facebook.com/kmsungporant/",
    icon: <AiFillFacebook />,
  },
];
