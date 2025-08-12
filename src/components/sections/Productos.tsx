import { BoxReveal } from "../magicui/box-reveal"
type Props = {}

export default function Productos({}: Props) {
  return (
    <section>
      <div className="flex flex-wrap justify-center gap-6 my-24">
        <BoxReveal boxColor="rgb(139, 92, 246, 0.8)" duration={0.5}>
          <h2 className="text-4xl font-bold text-purple-500">Productos</h2>
        </BoxReveal>
      </div>
    </section>
  );
}