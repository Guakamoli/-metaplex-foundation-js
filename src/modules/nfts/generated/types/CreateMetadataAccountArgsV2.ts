/**
 * This code was GENERATED using the solita package.
 * Please DO NOT EDIT THIS FILE, instead rerun solita to update it or write a wrapper to add functionality.
 *
 * See: https://github.com/metaplex-foundation/solita
 */

import * as definedTypes from '../types';
import * as beet from '@metaplex-foundation/beet';
export type CreateMetadataAccountArgsV2 = {
  data: definedTypes.DataV2;
  isMutable: boolean;
};

/**
 * @category userTypes
 * @category generated
 */
export const createMetadataAccountArgsV2Beet = new beet.BeetArgsStruct<CreateMetadataAccountArgsV2>(
  [
    ['data', definedTypes.dataV2Beet],
    ['isMutable', beet.bool],
  ],
  'CreateMetadataAccountArgsV2',
);