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
  { spec: 'Type', value: 'Bolted Bonnet O. S. & Y Type Rising Stem' },
  { spec: 'Size', value: '50mm to 600 mm' },
  { spec: 'Pressure Rating', value: '150, 300, 600, 900, 1500' },
  { spec: 'Design & Mfg. Standard', value: 'API 600 / BS 1414' },
  { spec: 'Inspection & Testing Standard', value: 'API 598' },
  { spec: 'Body Material', value: 'WCB, Cast Iron, CF8, CF8M, Alloy 20' },
  { spec: 'Trim Materials', value: '13% Cr. Stellited, AISI 304/316/Monel' },
  { spec: 'End Connection', value: 'Flanged as per ANSI B 16.5 / B 16.25' },
  { spec: 'Face to Face Dimension', value: 'ANSI B 16.10' },
  { spec: 'Optional', value: 'Manual gearbox or motorised Operation' },
];

const buttWeldEndData = [
  { spec: 'Type', value: 'Bolted Bonnet O. S. & Y Type Rising Stem' },
  { spec: 'Size', value: '50mm to 600 mm' },
  { spec: 'Pressure Rating', value: '150, 300, 600, 900, 1500' },
  { spec: 'Design & Mfg. Standard', value: 'API 600 / BS 1414' },
  { spec: 'Inspection & Testing Standard', value: 'API 598' },
  { spec: 'Body Material', value: 'WCB, CF8, CF8M, Alloy 20' },
  { spec: 'Trim Materials', value: '13% Cr. Stellited, AISI 304/316/Monel' },
  { spec: 'End Connection', value: 'Butt Weld as per ANSI B 16.5 / B 16.25' },
  { spec: 'Face to Face Dimension', value: 'ANSI B 16.10' },
  { spec: 'Optional', value: 'Manual gearbox or motorised Operation' },
];

const GateValvesContent = () => {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-extrabold tracking-tight text-primary sm:text-5xl mb-4">
          Gate Valves
        </h1>
        <p className="text-lg text-muted-foreground">
          Designed for on-off services, gate valves provide a tight seal and
          minimal pressure drop when fully open. Ideal for applications where
          flow needs to be completely shut off or allowed with minimal
          resistance.
        </p>
        <ul className="list-disc list-inside text-lg text-muted-foreground space-y-1 mt-4">
          <li>
            <span className="font-semibold text-foreground">Materials:</span>{' '}
            Cast carbon steel, forged carbon steel, stainless steel, cast iron,
            and alloy steel.
          </li>
          <li>
            <span className="font-semibold text-foreground">
              Sizes and Classes:
            </span>{' '}
            Available in sizes from 2'' to 24'' and pressure classes of 150#,
            300#, 600#, 900#, and 1500#.
          </li>
        </ul>
      </div>

      <div className="grid grid-cols-2 items-center gap-8">
        <div className="relative w-full h-64">
            <Image
                src={images.gateValveHighlight.src}
                alt={images.gateValveHighlight.alt}
                fill
                className="object-contain"
                data-ai-hint="valve diagram"
                loading="lazy"
            />
        </div>
        <div className="relative w-full h-64">
            <Image
                src={images.gateValveImage2.src}
                alt={images.gateValveImage2.alt}
                fill
                className="object-contain"
                data-ai-hint="valve diagram"
                loading="lazy"
            />
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-bold text-primary mb-2">
          Flanged End Gate Valve
        </h2>
        <p className="text-lg text-muted-foreground">
          Ideal for applications requiring full flow with minimal pressure drop,
          flanged end gate valves are used in water supply systems, sewage
          treatment, and oil and gas pipelines. They are designed for easy
          installation and maintenance. Our Flanged End Gate Valve are available
          in different sizes in order to fulfil clients' requirement. The
          specifications of flanged end are as follows:
        </p>
        <SpecTable data={flangedEndData} />
      </div>

      <div>
        <h2 className="text-2xl font-bold text-primary mb-2">
          Butt Weld End
        </h2>
        <p className="text-lg text-muted-foreground">
          Used in applications requiring a permanent, leak-proof joint, butt
          weld end gate valves are common in petrochemical, power generation,
          and refinery industries. They provide excellent strength and
          durability.
        </p>
        <SpecTable data={buttWeldEndData} />
      </div>
    </div>
  );
};

export default GateValvesContent;
