export interface IToggleProps extends IUseToggleProps {
  trueText: string;
  falseText: string;
}

export interface IUseToggleProps {
  handleToggleTrue?: () => void;
  handleToggleFalse?: () => void;
  defaultToggle: boolean;
  externalTriggerFalse?: boolean;
  type: string;
}
