const SectionTitle = ({ title, coloredPart }: { title: string, coloredPart: string }) => {
  return (
    <h1 className="lg:text-5xl font-bold text-center">
      {title} {""}
      <span className="text-purple">{coloredPart}</span>
    </h1>
  );
}
 
export default SectionTitle;