import { ClientKafka, MessagePattern } from "@nestjs/microservices";
import { IKafkaAdapter } from "./adapter";
import { TopicsEnum } from "../../utils/topics";
import { Observable } from "rxjs";
import { Injectable } from "@nestjs/common";

@Injectable()
export class KafkaService implements IKafkaAdapter {
  client: ClientKafka;

  constructor(kafka: ClientKafka) {
    this.client = kafka
  }

  async onModuleInit() {
    this.client.subscribeToResponseOf(TopicsEnum.ORCHESTRATOR);
    await this.client.connect();
    console.log("payment subscribers:", this.client.getConsumerAssignments());
  }
}