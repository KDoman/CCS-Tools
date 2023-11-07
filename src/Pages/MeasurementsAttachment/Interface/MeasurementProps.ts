export interface IInputMeasurement {
  setValueX: (newValue: number) => void;
  setValueY: (newValue: number) => void;
  setValueZ: (newValue: number) => void;
  valueXFullMeasurements: number;
  setValueXFullMeasurements: (newValue: number) => void;
  valueYFullMeasurements: number;
  setValueYFullMeasurements: (newValue: number) => void;
  valueZFullMeasurements: number;
  setValueZFullMeasurements: (newValue: number) => void;
  fullValue: string;
  setFullValue: (newValue: string) => void;
  manualChecked: boolean;
  setManualChecked: (newValue: boolean) => void;
}

export interface IMeasurementsValue {
  valueX: number;
  valueY: number;
  valueZ: number;
}

export interface IRotationButton {
  checked: boolean;
  setChecked: (newValue: boolean) => void;
}

export interface IDefaults extends IMeasurementsValue, IRotationButton {}
