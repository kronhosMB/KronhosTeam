import AutoplayCarousel from "@/components/Carrousel";

const images = [
  { imgUrl: 'https://www.sap.com/dam/application/shared/logos/customer/h-q/promesa-colored.png', title: 'Image 1' },
  { imgUrl: 'https://www.sap.com/dam/application/shared/logos/customer/a-g/corona-industrial-customer-logo.png', title: 'Image 2' },
  { imgUrl: 'https://www.sap.com/dam/application/shared/logos/customer/h-q/innovasport-customer-logo.svg/innovasport-customer-logo.svg', title: 'Image 3' },
  { imgUrl: 'https://www.sap.com/dam/application/shared/logos/customer/a-g/fonterra-dfl-customer-logo.png', title: 'Image 4' },
  { imgUrl: 'https://www.sap.com/dam/application/shared/logos/customer/h-q/nestle-customer-logo.png', title: 'Image 5' },
  { imgUrl: 'https://www.sap.com/dam/application/shared/logos/grupo-nutresa-logo.png', title: 'Image 6' },
  { imgUrl: 'https://www.sap.com/dam/application/shared/logos/customer/h-q/nadro-customer-logo.png', title: 'Image 7' },
];

export default function PagePartners() {
  return (
    <div className="relative h-screen flex justify-center items-center">
      <img
        src="https://www.sap.com/dam/application/shared/graphics/world-map.png/_jcr_content/renditions/original.adapt.825_464.false.false.false.false.png/1726667683618.png"
        alt="Background"
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4/5 h-auto object-contain"
      />
      <div className="relative flex justify-center items-center h-3/4 w-full">
        <div className="w-7/12 h-1/2">
          <AutoplayCarousel images={images} />
        </div>
      </div>
    </div>
  );
}
