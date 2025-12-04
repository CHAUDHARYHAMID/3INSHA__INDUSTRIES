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

const singleDoubleSeatedData = [
    { spec: 'Type', value: 'Single / Double Seated Control Valve' },
    { spec: 'Size', value: 'From 1/2" to 8" for single seated & 1" to 12" for Double Seated' },
    { spec: 'Pressure Rating', value: 'Class 150, 300, 600' },
    { spec: 'Design Pressure', value: 'Up to 900 PSIG' },
    { spec: 'Design temperature', value: 'Up to 100 Dig. C to 850 Dig. C' },
    { spec: 'Body Material', value: 'C. S., SS 304, SS 316, Alloy 20, Monnel' },
    { spec: 'Trim Materials', value: 'AISI 410 / 304 / 316' },
    { spec: 'End Connection', value: 'Screwed upto 2" Socket Weld End up to 3" Flanged confirming to ANSI, DIN,IS,BS' },
    { spec: 'Actuator Type', value: 'Spring Diaphragm Cylinder' },
    { spec: 'Characteristics', value: 'Quick-Opening. Equal Percentage & Linear' },
    { spec: 'Bellows Seal', value: 'Stainless Steel & PTFE' },
    { spec: 'Packing', value: 'Teflon, Teflon Asbestos Graphited asbestos' },
];

const diaphragmButterflyData = [
    { spec: 'Type', value: 'Diaphragm Operated Butterfly Valve' },
    { spec: 'Size', value: 'From 2" to 36"' },
    { spec: 'Design Pressure', value: 'Up to 600 lbs' },
    { spec: 'Design temperature', value: 'Up to 650 Dig. C' },
    { spec: 'Body Material', value: 'C. I.,C. S., SS 304, SS 316, Alloy 20, Monnel' },
    { spec: 'Trim Materials', value: 'AISI 410 / 304 / 316' },
    { spec: 'End Connection', value: 'Wafer Type Design' },
    { spec: 'Actuator Type', value: 'Spring Diaphragm Cylinder' },
];

const ControlValvesContent = () => {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-extrabold tracking-tight text-primary sm:text-5xl mb-4">
          Control Valves
        </h1>
        <p className="text-lg text-muted-foreground">
          Designed for modulating flow and pressure in process systems, control valves provide precise regulation and automation of fluid dynamics.
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
            Available in sizes from ½'' to 8'' and pressure classes of 150#, 300# and 600#.
          </li>
        </ul>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
        <div className="relative w-full h-64">
            <Image
                src={images.controlValveHighlighter.src}
                alt={images.controlValveHighlighter.alt}
                width={256}
                height={256}
                className="object-contain w-full h-full"
                data-ai-hint="control valve"
                loading="lazy"
            />
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-bold text-primary mb-2">
          Single Seated / Double Seated
        </h2>
        <p className="text-lg text-muted-foreground">
          These control valves are used for accurate flow control in process industries, including chemical processing, pharmaceuticals, and food and beverage production. They ensure stable and efficient operation.
        </p>
        <SpecTable data={singleDoubleSeatedData} />
      </div>

      <div>
        <h2 className="text-2xl font-bold text-primary mb-2">
          Diaphragm Operated Butterfly Valve
        </h2>
        <p className="text-lg text-muted-foreground">
          Used for on/off and throttling service, these valves are common in water treatment, HVAC, and food processing industries. They offer precise control and easy operation. Robustly constructed, our Diaphragm operated Butterfly valves are available at the most competitive prices.
        </p>
        <SpecTable data={diaphragmButterflyData} />
      </div>
    </div>
  );
};

export default ControlValvesContent;
