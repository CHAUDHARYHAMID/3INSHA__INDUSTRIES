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

const swingTypeData = [
  { spec: 'Type', value: 'Swing Type' },
  { spec: 'Size', value: '50mm to 600 mm' },
  { spec: 'Pressure Rating', value: '150, 300, 600, 900, 1500' },
  { spec: 'Design & Mfg. Standard', value: 'BS-1868' },
  { spec: 'Inspection & Testing Standard', value: 'API 598 / BS 6755' },
  { spec: 'Body Material', value: 'WCB, Cast Iron, CF8, CF8M, Alloy 20' },
  { spec: 'Trim Materials', value: '13% Cr. Stellited, AISI 304/316/Monel' },
  { spec: 'End Connection', value: 'Flanged as per ANSI B 16.5 / B 16.25' },
  { spec: 'Face to Face Dimension', value: 'ANSI B 16.10' },
];

const liftTypeData = [
  { spec: 'Type', value: 'Lift Type' },
  { spec: 'Size', value: '50mm to 600 mm' },
  { spec: 'Pressure Rating', value: '150, 300, 600, 900, 1500' },
  { spec: 'Design & Mfg. Standard', value: 'BS-1868' },
  { spec: 'Inspection & Testing Standard', value: 'API 598 / BS 6755' },
  { spec: 'Body Material', value: 'WCB, Cast Iron, CF8, CF8M, Alloy 20' },
  { spec: 'Trim Materials', value: '13% Cr. Stellited, AISI 304/316/Monel' },
  { spec: 'End Connection', value: 'Flanged as per ANSI B 16.5 / B 16.25' },
  { spec: 'Face to Face Dimension', value: 'ANSI B 16.10' },
];

const forgedSteelData = [
    { spec: 'Type', value: 'Forged Steel Check Valve' },
    { spec: 'Size', value: 'From 15 mm to 50 mm' },
    { spec: 'Pressure Rating', value: 'Class 150, 300, 600, 800, 1500, 2500' },
    { spec: 'Design & Mfg. Standard', value: 'API 602 (Gate) BS 5352' },
    { spec: 'Inspection & Testing Standard', value: 'API 598, BS 5146' },
    { spec: 'Body Material', value: 'ASTM A 105, A182 F304 F316' },
    { spec: 'Trim Materials', value: 'AISI 410 / 304 / 316, Stellited Monel' },
    { spec: 'End Connection', value: 'Screwed, Socket Welded as per ANSI B 16.11 or Welded Flanges as per ANSI B 16.5 in class 150, 300, 600' },
];

const NonReturnValvesContent = () => {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-extrabold tracking-tight text-primary sm:text-5xl mb-4">
          Non-Return Valves (Check Valves)
        </h1>
        <p className="text-lg text-muted-foreground">
        Also known as check valves, they prevent backflow in pipelines, ensuring a unidirectional flow. Essential for protecting pumps and other equipment from reverse flow.
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
            Available in sizes from 2'' to 24'' and pressure classes of 150#, 300#, 600#, 900#, and 1500#.
          </li>
        </ul>
      </div>

      <div className="grid grid-cols-2 items-center gap-8">
        <div className="relative w-full h-64">
            <Image
                src={images.nrvHighlighter.src}
                alt={images.nrvHighlighter.alt}
                fill
                className="object-contain"
                data-ai-hint="check valve"
            />
        </div>
        <div className="relative w-full h-64">
            <Image
                src={images.nrv2.src}
                alt={images.nrv2.alt}
                fill
                className="object-contain"
                data-ai-hint="check valve"
            />
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-bold text-primary mb-2">
          Swing Type Valve
        </h2>
        <p className="text-lg text-muted-foreground">
        Used to prevent backflow in piping systems, swing type non-return valves are common in water distribution, sewage systems, and industrial processes. They offer low-pressure drop and reliable operation. Specifications of swing type valves are as under:
        </p>
        <SpecTable data={swingTypeData} />
      </div>

      <div>
        <h2 className="text-2xl font-bold text-primary mb-2">
          Lift Type Valve
        </h2>
        <p className="text-lg text-muted-foreground">
        Ideal for applications where frequent flow reversal occurs, lift type non-return valves are used in water supply, chemical processing, and steam systems. They provide quick and efficient flow reversal prevention. The range of lift type valves is available in following options:
        </p>
        <SpecTable data={liftTypeData} />
      </div>

       <div>
        <h2 className="text-2xl font-bold text-primary mb-2">
          Forged Steel Non-Return Valve
        </h2>
        <p className="text-lg text-muted-foreground">
        These valves are designed for high-pressure and high-temperature applications. They are used in power plants, petrochemical industries, and oil and gas pipelines for their durability and reliability.
        </p>
        <ul className="list-disc list-inside text-lg text-muted-foreground space-y-1 mt-4">
          <li>
            <span className="font-semibold text-foreground">Materials:</span>{' '}
            Cast carbon steel, forged carbon steel, stainless steel, cast iron, and alloy steel.
          </li>
          <li>
            <span className="font-semibold text-foreground">
              Size:
            </span>{' '}
            1/2" to 2"
          </li>
           <li>
            <span className="font-semibold text-foreground">
              Classes:
            </span>{' '}
            150, 300, 600, 800, 1500, 2500
          </li>
        </ul>
        <SpecTable data={forgedSteelData} />
      </div>
    </div>
  );
};

export default NonReturnValvesContent;
