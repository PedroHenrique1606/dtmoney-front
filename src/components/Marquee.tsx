import { cn } from "@/lib/utils";
import Marquee from "./ui/marquee";

const reviews = [
  {
    name: "Carlos",
    username: "@carlos",
    body: "O DT Money transformou completamente como eu gerencio minhas finanças. Nunca foi tão fácil economizar!",
    img: "https://avatar.vercel.sh/carlos",
  },
  {
    name: "Fernanda",
    username: "@fernanda",
    body: "A visualização dos gráficos é incrível! Agora entendo para onde vai cada centavo do meu dinheiro.",
    img: "https://avatar.vercel.sh/fernanda",
  },
  {
    name: "Hiroshi",
    username: "@hiroshi",
    body: "このアプリは驚くべきです。私の財務管理を非常に簡単にしてくれました。",
    img: "https://avatar.vercel.sh/hiroshi",
  },
  {
    name: "Sofia",
    username: "@sofia",
    body: "Não consigo imaginar minha vida financeira sem o DT Money. Melhor ferramenta que já usei!",
    img: "https://avatar.vercel.sh/sofia",
  },
  {
    name: "Alejandro",
    username: "@alejandro",
    body: "Una aplicación revolucionaria para el manejo de mis finanzas. Totalmente recomendable.",
    img: "https://avatar.vercel.sh/alejandro",
  },
  {
    name: "Amara",
    username: "@amara",
    body: "DT Money me ajuda a planejar e economizar com mais eficiência. Adoro as funcionalidades!",
    img: "https://avatar.vercel.sh/amara",
  },
  {
    name: "Liam",
    username: "@liam",
    body: "DT Money is a game-changer. Managing my budget has never been this smooth and intuitive.",
    img: "https://avatar.vercel.sh/liam",
  },
  {
    name: "Yara",
    username: "@yara",
    body: "Com o DT Money, consegui organizar minhas finanças de forma prática e rápida. Recomendo muito!",
    img: "https://avatar.vercel.sh/yara",
  },
  {
    name: "Oliver",
    username: "@oliver",
    body: "DT Money is simply outstanding. It's everything I needed to take control of my finances.",
    img: "https://avatar.vercel.sh/oliver",
  },
  {
    name: "Joana",
    username: "@joana",
    body: "Agora consigo ver claramente onde economizar e onde gastar. O DT Money é essencial no meu dia a dia.",
    img: "https://avatar.vercel.sh/joana",
  },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({
  img,
  name,
  username,
  body,
}: {
  img: string;
  name: string;
  username: string;
  body: string;
}) => {
  return (
    <figure
      className={cn(
        "relative w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
        // light styles
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <img className="rounded-full" width="32" height="32" alt="" src={img} />
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium dark:text-white">
            {name}
          </figcaption>
          <p className="text-xs font-medium dark:text-white/40">{username}</p>
        </div>
      </div>
      <blockquote className="mt-2 text-sm">{body}</blockquote>
    </figure>
  );
};

export function MarqueeDemo() {
  return (
    <div className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden rounded-lg bg-gray1">
      <Marquee pauseOnHover className="[--duration:20s]">
        {firstRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:20s]">
        {secondRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
    </div>
  );
}
