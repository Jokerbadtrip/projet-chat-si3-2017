/**
 * Classe représentant l'objet Chanel
 * Cet objet est renvoyé grâce à l'url /threads.
 */
export class ChanelModel {

  /**
   * Identifiant du chanel.
   */
  public id: number;

  /**
   * Nom du chanel
   */
  public name: string;

  /*
  * Description du chanel
   */

  public description: string;

  /**
   * Date de creation du chanel.
   */
  public createdAt: string;

  /**
   * Date à laquelle le chanel a eu la dernière modification.
   */
  public updatedAt: string;

  constructor(id: number, name?: string, description?: string, createdAt?: string, updatedAt?: string) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
  }
}
