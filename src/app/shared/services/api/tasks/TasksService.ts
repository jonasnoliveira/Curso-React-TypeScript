import { ITasks } from "app/shared/interfaces";
import { Api } from "../ApiConfig";
import { ErrorExcption } from "../ErrorExcption";

const getAll = async (): Promise<ITasks[] | ErrorExcption> => {
    try {
        const { data } = await Api().get("/tasks");
        return data;
    } catch (error: any) {
        return new ErrorExcption(error.message || 'Erro ao consultar API!');
    };

};

const getById = async (id: number): Promise<ITasks | ErrorExcption> => {
    try {
        const { data } = await Api().get(`/tasks/${id}`);
        return data;
    } catch (error: any) {
        return new ErrorExcption(error.message || 'Erro ao consultar API!');
    };

};

const create = async (dataToCreate: Omit<ITasks, 'id'>): Promise<ITasks[] | ErrorExcption> => {
    try {
        const { data } = await Api().post("/tasks", dataToCreate);
        return data;
    } catch (error: any) {
        return new ErrorExcption(error.message || 'Erro ao consultar API!');
    };

};

const updateById = async (id: number, dataToUpdate: ITasks): Promise<ITasks | ErrorExcption> => {
    try {
        const { data } = await Api().put(`/tasks/${id}`, dataToUpdate);
        return data;
    } catch (error: any) {
        return new ErrorExcption(error.message || 'Erro ao consultar API!');
    };

};

const deleteById = async (id: number): Promise<undefined | ErrorExcption> => {
    try {
        const { data } = await Api().delete(`/tasks/${id}`);
        return undefined;
    } catch (error: any) {
        return new ErrorExcption(error.message || 'Erro ao consultar API!');
    };

};

export const TasksService = {
    getAll,
    getById,
    create,
    updateById,
    deleteById
};