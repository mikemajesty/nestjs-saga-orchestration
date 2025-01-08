import { ConsumerRunConfig, ConsumerSubscribeTopics, Kafka, ProducerRecord } from "kafkajs";
import { ConsumerInput, ConsumerRunInput } from "../../utils/types";

export abstract class IConsumerAdapter<T extends Kafka = Kafka> {
  client: T
  abstract consume(topic: ConsumerInput, config: ConsumerRunInput): Promise<void>
}