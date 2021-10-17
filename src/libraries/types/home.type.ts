import { IResultProps } from './result.type'

export interface IHomeResponseProps {
  trending: IResultProps[]
  popular: IResultProps[]
  discoverMovie: IResultProps[]
}
