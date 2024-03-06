import OpenAI from 'openai';
import {OpenAIApi} from '../../Constant';


const openai = new OpenAI({
  apiKey: OpenAIApi
});


export default openai