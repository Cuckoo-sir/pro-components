// eslint-disable-next-line @typescript-eslint/triple-slash-reference
/// <reference path="../../../typings.d.ts" />

export interface AddressCardProps {
  icon?: string;
  name: string;
  phone: string;
  address: string;
  onClick?: () => void;
}
