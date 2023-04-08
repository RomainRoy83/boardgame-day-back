import { Injectable } from "@nestjs/common"
import { InjectRepository } from "@nestjs/typeorm"
import { Mechanism } from "../../../typeorm/entities/Mechanism"
import { Repository } from "typeorm"
import {
  CreateMechanismParams,
  UpdateMechanismParams,
} from "../../../utils/types"

@Injectable()
export class MechanismService {
  constructor(
    @InjectRepository(Mechanism)
    private mechanismRepository: Repository<Mechanism>,
  ) {}

  findAllMechanisms() {
    return this.mechanismRepository.find()
  }

  findOneMechanism(id) {
    return this.mechanismRepository.findOneBy({
      id: id,
    })
  }

  createMechanism(mechanismDetails: CreateMechanismParams) {
    const newMechanism = this.mechanismRepository.create({
      ...mechanismDetails,
    })
    return this.mechanismRepository.save(newMechanism)
  }

  updateMechanism(id: number, mechanismDetails: UpdateMechanismParams) {
    return this.mechanismRepository.update({ id }, { ...mechanismDetails })
  }

  deleteMechanism(id: number) {
    return this.mechanismRepository.delete({ id })
  }
}
