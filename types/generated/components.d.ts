import type { Schema, Struct } from '@strapi/strapi';

export interface MilkRatioMilkRatio extends Struct.ComponentSchema {
  collectionName: 'components_milk_ratio_milk_ratios';
  info: {
    displayName: 'milk_ratio';
  };
  attributes: {
    liquid_ratio: Schema.Attribute.Relation<
      'oneToOne',
      'api::liquid-ratio.liquid-ratio'
    >;
  };
}

export interface SyrupRatioSyrupRatio extends Struct.ComponentSchema {
  collectionName: 'components_syrup_ratio_syrup_ratios';
  info: {
    displayName: 'syrup_ratio';
  };
  attributes: {
    liquid_ratio: Schema.Attribute.Relation<
      'oneToOne',
      'api::liquid-ratio.liquid-ratio'
    >;
  };
}

export interface WaterRatioWaterRatio extends Struct.ComponentSchema {
  collectionName: 'components_water_ratio_water_ratios';
  info: {
    displayName: 'water_ratio';
  };
  attributes: {
    liquid_ratio: Schema.Attribute.Relation<
      'oneToOne',
      'api::liquid-ratio.liquid-ratio'
    >;
  };
}

export interface WhiskeyRatioWhis extends Struct.ComponentSchema {
  collectionName: 'components_whiskey_ratio_whis';
  info: {
    displayName: 'whis';
  };
  attributes: {
    liquid_ratio: Schema.Attribute.Relation<
      'oneToOne',
      'api::liquid-ratio.liquid-ratio'
    >;
  };
}

export interface WhiskeyRatioWhiskeyRatio extends Struct.ComponentSchema {
  collectionName: 'components_whiskey_ratio_whiskey_ratios';
  info: {
    displayName: 'whiskey_ratio';
  };
  attributes: {};
}

declare module '@strapi/strapi' {
  export namespace Public {
    export interface ComponentSchemas {
      'milk-ratio.milk-ratio': MilkRatioMilkRatio;
      'syrup-ratio.syrup-ratio': SyrupRatioSyrupRatio;
      'water-ratio.water-ratio': WaterRatioWaterRatio;
      'whiskey-ratio.whis': WhiskeyRatioWhis;
      'whiskey-ratio.whiskey-ratio': WhiskeyRatioWhiskeyRatio;
    }
  }
}
