import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import Image from 'next/image';

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

const butterflyValveData = [
    { spec: 'Type', value: 'Centre Disc, Eccentric Disc' },
    { spec: 'Size', value: '50mm to 600mm' },
    { spec: 'Pressure Ratings', value: '150, 300, 600' },
    { spec: 'Body Material', value: 'C. I. WCB, CF8, CF8M' },
    { spec: 'Operation', value: 'By Lever / Gear / Motor / Actuator' },
    { spec: 'Seat Material', value: 'Natural & Synthetic Rubbers' },
    { spec: 'Construction', value: 'Wafer, Lug, Flanged ends' },
    { spec: 'Disc Material', value: 'C. I. WCB, CF8, CF8M' },
    { spec: 'Other Function', value: 'Pneumatic or Electrical Actuator can be provided, Gear Operation Provided for valves 200mm & above.' },
];

const ButterflyValvesContent = () => {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-extrabold tracking-tight text-primary sm:text-5xl mb-4">
          Butterfly Valves
        </h1>
        <p className="text-lg text-muted-foreground">
          Suitable for large volume water applications, butterfly valves offer a compact design with efficient flow control and quick shutoff capabilities. We are engaged in offering butterfly valves, which are widely used in chemical industries. These butterfly valves controls the flow of fluid flowing through a section of pipe. Available in various sizes, we can provide made-to-order butterfly valve as per customers’ requirements. Used for isolating or regulating flow, butterfly valves are common in water distribution, HVAC, and food processing industries. They offer quick operation, low pressure drop, and compact design.
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
            Available in sizes from 2'' to 24'' and pressure classes of 150#, 300# and 600#.
          </li>
        </ul>
      </div>

      <div className="grid grid-cols-2 items-center gap-8">
        <div className="relative w-full h-64">
            <Image
                src="https://i.postimg.cc/c1TJPgbN/6th-butterfly-highlighter.jpg"
                alt="Butterfly valve"
                fill
                className="object-contain"
                data-ai-hint="butterfly valve"
            />
        </div>
        <div className="relative w-full h-64">
            <Image
                src="https://i.postimg.cc/8P4j3vQv/butterfly-valve-2.jpg"
                alt="Butterfly valve application"
                fill
                className="object-contain"
                data-ai-hint="industrial valve"
            />
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-bold text-primary mb-2">
          Specifications
        </h2>
        <SpecTable data={butterflyValveData} />
      </div>
    </div>
  );
};

export default ButterflyValvesContent;
