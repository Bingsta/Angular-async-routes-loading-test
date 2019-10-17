import { PageType } from './PageType.type';
import Module from './Module.type';

export default class Page {
  id: number;
  name: string;
  type: PageType;
  title: string;
  strapline: string;
  coverImage: string;
  modules: Module[];
}
