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

const flangedEndData = [
  { spec: 'Type', value: 'Bolted Bonnet O.S. & Y Type Rising Stem' },
  { spec: 'Size', value: '25mm to 600 mm' },
  { spec: 'Pressure Rating', value: '150, 300, 600, 900, 1500' },
  { spec: 'Design & Mfg. Standard', value: 'BS 1873' },
  { spec: 'Inspection & Testing Standard', value: 'API 598 / BS 6755 Part-1' },
  { spec: 'Body Material', value: 'WCB, Cast Iron, CF8, CF8M, Alloy 20' },
  { spec: 'Trim Materials', value: '13% Cr. Stellited, AISI 304/316/Monel' },
  { spec: 'End Connection', value: 'Flanged as per ANSI B 16.5 / B 16.25' },
  { spec: 'Face to Face Dimension', value: 'ANSI B 16.10' },
  { spec: 'Optional', value: 'Manual gearbox or motorised operation.' },
];

const buttWeldEndData = [
  { spec: 'Type', value: 'Bolted Bonnet O. S. & Y Type Rising Stem' },
  { spec: 'Size', value: '25mm to 500 mm' },
  { spec: 'Pressure Rating', value: '150, 300, 600, 900, 1500' },
  { spec: 'Design & Mfg. Standard', value: 'BS 1873' },
  { spec: 'Inspection & Testing Standard', value: 'API 598 / BS 6755 Part-1' },
  { spec: 'Body Material', value: 'WCB, CF8, CF8M, Alloy 20' },
  { spec: 'Trim Materials', value: '13% Cr. Stellited, AISI 304/316/Monel' },
  { spec: 'End Connection', value: 'Butt Weld as per ANSI B 16.5 / B 16.25' },
  { spec: 'Face to Face Dimension', value: 'ANSI B 16.10' },
  { spec: 'Optional', value: 'Manual gearbox or motorised operation.' },
];

const GlobeValvesContent = () => {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-extrabold tracking-tight text-primary sm:text-5xl mb-4">
          Globe Valves
        </h1>
        <p className="text-lg text-muted-foreground">
          Perfect for throttling and flow regulation, globe valves offer precise control and shutoff capabilities. They are essential for applications requiring accurate flow modulation.
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
            Available in sizes from 1'' to 24'' and pressure classes of 150#, 300#, 600#, 900#, and 1500#.
          </li>
        </ul>
      </div>

      <div className="grid grid-cols-2 items-center gap-8">
        <div className="relative w-full h-64">
            <Image
                src={images.globeValveHighlighter.src}
                alt={images.globeValveHighlighter.alt}
                fill
                className="object-contain"
                data-ai-hint="globe valve"
            />
        </div>
        <div className="relative w-full h-64">
            <Image
                src={images.globeValveBanner.src}
                alt={images.globeValveBanner.alt}
                fill
                className="object-contain"
                data-ai-hint="industrial valve"
            />
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-bold text-primary mb-2">
          Flanged End Globe Valve
        </h2>
        <p className="text-lg text-muted-foreground">
          Known for their precise throttling capabilities, flanged end globe valves are used in HVAC systems, chemical processing, and power plants. They ensure accurate flow control and are easy to maintain. Available in the following specifications:
        </p>
        <SpecTable data={flangedEndData} />
      </div>

      <div>
        <h2 className="text-2xl font-bold text-primary mb-2">
          Butt Weld End
        </h2>
        <p className="text-lg text-muted-foreground">
          Suitable for high-pressure applications, butt weld end globe valves provide a reliable, leak-proof connection. They are commonly used in oil and gas, chemical processing, and power generation industries.
        </p>
        <SpecTable data={buttWeldEndData} />
      </div>
    </div>
  );
};

export default GlobeValvesContent;
