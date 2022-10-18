import createApp from '@shopify/app-bridge';
import {ResourcePicker} from '@shopify/app-bridge/actions';

const app = createApp({
  apiKey: '840dda720d85df6998dc860207d63806',
  host: https://2d17-119-73-121-153.in.ngrok.io,
});

const productPicker = ResourcePicker.create(app, {
  resourceType: ResourcePicker.ResourceType.Product,
});

const variantPicker = ResourcePicker.create(app, {
  resourceType: ResourcePicker.ResourceType.ProductVariant,
});

const collectionPicker = ResourcePicker.create(app, {
  resourceType: ResourcePicker.ResourceType.Collection,
});

const picker = ResourcePicker.create(app, {
  resourceType: ResourcePicker.ResourceType.Product,
});

picker.subscribe(ResourcePicker.Action.CANCEL, () => {
  // Picker was cancelled
});

picker.subscribe(ResourcePicker.Action.SELECT, (selectPayload) => {
  const selection = selectPayload.selection;
  // Do something with `selection`
});

const productWithSpecificVariantsSelected = {
  id: 'gid://shopify/Product/12345',
  variants: [{
    id: 'gid://shopify/ProductVariant/1',
  }],
};

const productWithAllVariantsSelected = {
  id: 'gid://shopify/Product/67890',
};

const productPicker = ResourcePicker.create(app, {
  resourceType: ResourcePicker.ResourceType.Product,
  options: {
    initialSelectionIds: [productWithVariantsSelected, productWithAllVariantsSelected],
  },
});
