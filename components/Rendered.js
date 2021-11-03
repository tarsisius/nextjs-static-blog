import NextImage from "next/image";

const Image = ({ processedImage }) => {
  return (
    <div className="detail_image">
      <NextImage
        src={processedImage}
        layout="fill"
        alt={processedImage}
        priority="false"
      />
    </div>
  );
};
const Rendered = { Image };

export default Rendered;
