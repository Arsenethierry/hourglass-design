import React from 'react';
import cn from 'classnames';

type VariantType =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6'
  | 'subtitle1'
  | 'subtitle2'
  | 'body1'
  | 'body2'
  | 'caption';

interface TypographyProps {
  variant?: VariantType;
  className?: string;
  display?: 'block' | 'initial' | 'inline';
  alignment?: 'inherit' | 'left' | 'center' | 'right' | 'justify';
  children?: React.ReactNode;
  customFont?: boolean;
}

interface VariantsMappingTypes {
  h1: string;
  h2: string;
  h3: string;
  h4: string;
  h5: string;
  h6: string;
  subtitle1: string;
  subtitle2: string;
  body1: string;
  body2: string;
  caption: string;
}

const variantsMapping: VariantsMappingTypes = {
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  h5: 'h5',
  h6: 'h6',
  subtitle1: 'h6',
  subtitle2: 'h6',
  body1: 'p',
  body2: 'p',
  caption: 'span'
};

const variantStyleMapping: VariantsMappingTypes = {
  h1: 'text-6xl font-semibold',
  h2: 'text-5xl font-medium',
  h3: 'text-4xl font-medium',
  h4: 'text-3xl font-medium',
  h5: 'text-2xl font-medium',
  h6: 'text-xl font-medium',
  subtitle1: 'text-base font-medium',
  subtitle2: 'text-sm font-medium',
  body1: 'text-base font-normal',
  body2: 'text-sm font-normal',
  caption: 'text-sm font-normal'
};



export const Typography: React.FC<TypographyProps> = ({
  customFont = false,
  variant = 'subtitle2',
  className = '',
  display = 'initial',
  children,
  alignment = 'inherit'
}) => {
  const classes = cn(
    { [variantStyleMapping[variant]]: !customFont },
    { [`text-${alignment}`]: alignment !== 'inherit' },
    { [display]: display !== 'initial' },
    'font-poppins',
    className
  );
  const Component = `${variantsMapping[variant]}` as any;
  return <Component className={classes}>{children}</Component>;
};