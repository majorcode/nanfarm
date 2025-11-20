import { Container } from "@/components/layout/container.tsx";

export default function Home() {
  const date = new Date();
  date.setHours(date.getHours() + 1);

  const meta = {
    title: "Home",
    description: "Welcome to Nancy Farmer's personal web site.",
  };

  return (
    <Container {...meta}>
      <img src="/img/photo.png" class="my-4 rounded-lg" />
    </Container>
  );
}
