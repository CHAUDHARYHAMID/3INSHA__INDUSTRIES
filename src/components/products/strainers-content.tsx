import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import Image from 'next/image';
import images from '@/lib/placeholder-images.json';

const SpecTable = ({
  data,
}: {
  data: {
    spec: string;
    value: string;
  }[];
}) => (
  <Table className="my-4 border">
    <TableBody>
      {data.map(row => (
        <TableRow key={row.spec}>
          <TableCell className="font-medium border-r w-1/3">
            {row.spec}
          </TableCell>
          <TableCell>{row.value}</TableCell>
        </TableRow>
      ))}
    </TableBody>
  </Table>
);

const strainerData = [
    { spec: 'Type', value: 'Y Type, Basket Type' },
    { spec: 'Size Range', value: '25mm to 400mm' },
    { spec: 'Pressure Rating', value: 'Class 150, 300, 600, 1500' },
    { spec: 'Body Materials', value: 'WCB, CF 8, CF8M, Alloy 20, Cast Iron' },
    { spec: 'Trim Material', value: '40/60 (Mesh), SS 304/316, Brass' },
    { spec: 'End Connection', value: 'Flanged as per ASNI B 16.5 Butt Welded as per ANSI B 16.25' },
    { spec: 'Inspection & Testing Standard', value: 'BS 6755 Part-1' },
];

const StrainersContent = () => {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-extrabold tracking-tight text-primary sm:text-5xl mb-4">
          Strainers
        </h1>
        <p className="text-lg text-muted-foreground">
          Strainers are crucial for protecting pipelines and equipment by filtering out debris and contaminants. They help maintain the efficiency and longevity of systems. We offer two types of strainers, which are used for removing foreign particles from liquids, gas or steam lines. Known for their high performance and longer service life, our strainers are a perfect solution to serve the requirements of various industries.
        </p>
        <ul className="list-disc list-inside text-lg text-muted-foreground space-y-1 mt-4">
          <li>
            <span className="font-semibold text-foreground">Materials:</span>{' '}
            Cast carbon steel, forged carbon steel, stainless steel, cast iron, and alloy steel.
          </li>
          <li>
            <span className="font-semibold text-foreground">
              Sizes and Classes:
            </span>{' '}
            Available in sizes from 1'' to 16'' and pressure classes of 150#, 300#, 600#, 900#, and 1500#.
          </li>
        </ul>
      </div>

      <div className="grid grid-cols-2 items-center gap-8">
        <div className="relative w-full h-64">
            <Image
                src={images.strainerHighlighter.src}
                alt={images.strainerHighlighter.alt}
                fill
                className="object-contain"
                data-ai-hint="industrial strainer"
            />
        </div>
        <div className="relative w-full h-64">
            <Image
                src={images.basketStrainer.src}
                alt={images.basketStrainer.alt}
                fill
                className="object-contain"
                data-ai-hint="basket strainer"
            />
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-bold text-primary mb-2">
          Specifications
        </h2>
        <SpecTable data={strainerData} />
      </div>

      <div>
        <h2 className="text-2xl font-bold text-primary mb-2">
          Y-type Strainer
        </h2>
        <p className="text-lg text-muted-foreground">
          Used to remove debris from pipelines, Y-type strainers are common in water supply, chemical processing, and HVAC systems. They protect equipment from damage and ensure smooth operation.
        </p>
      </div>
      <div>
        <h2 className="text-2xl font-bold text-primary mb-2">
          Basket Type Strainer
        </h2>
        <p className="text-lg text-muted-foreground">
          Used in applications requiring large filtration capacity, basket type strainers are common in water treatment, chemical processing, and food and beverage industries. They provide effective removal of contaminants.
        </p>
      </div>

    </div>
  );
};

export default StrainersContent;
