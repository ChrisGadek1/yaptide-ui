import { Autocomplete, AutocompleteRenderInputParams, Popper, PopperProps, TextField } from "@mui/material";
import React from "react";
import { COMMON_MATERIAL_IDS } from "../../util/Materials/materials";
import SimulationMaterial from "../../util/Materials/SimulationMaterial";

export interface MaterialSelectProps {
    onChange?: (event: React.SyntheticEvent<Element, Event>, newValue: string | null) => void,
    materials: Record<string, SimulationMaterial>
    value?: string
}

const isCommonMaterial = (mat: SimulationMaterial) => COMMON_MATERIAL_IDS.includes(mat.simulationData.id);

const commonCompare = (a: SimulationMaterial, b: SimulationMaterial): number => {
    const [aId, bId] = [a.simulationData.id, b.simulationData.id].map(e => parseInt(e));
    if (isCommonMaterial(a) === isCommonMaterial(b)) {
        return aId - bId;
    } else if (isCommonMaterial(b))
        return 1;
    return -1;
}

export function MaterialSelect(props: MaterialSelectProps) {

    const CustomPopper = (popperProps: PopperProps) => {
        return (
            <Popper
                {...popperProps}
                style={{ width: 'fit-content' }}
                placement="bottom-start"
            />
        )
    };

    const renderInput = (params: AutocompleteRenderInputParams) => {
        return (
            <TextField
                {...params}
                InputProps={{
                    ...params?.InputProps,
                    style: { fontSize: '12px' }
                }}
                size="small"
                variant="standard"
            />
        )
    };

    const getOptionLabel = (id:string, name:string) => {
        return `[${id}] ${name}`;
    }

    return (
        <Autocomplete
            fullWidth
            disableClearable

            size="small"
            sx={{ width: '100%' }}

            onChange={(event, newValue) => {
                props.onChange?.call(null, event, newValue.simulationData.name);
            }}

            value={props.materials[props.value ?? '']}

            options={Object.values(props.materials).sort(commonCompare)}

            groupBy={(option) => isCommonMaterial(option)
                ? 'Common'
                : 'Other'
            }

            getOptionLabel={(option) => getOptionLabel(
                option.simulationData.id,
                option.simulationData.name
            )}

            PopperComponent={CustomPopper}
            renderInput={renderInput}

            ListboxProps={{
                style: {
                    fontSize: '12px',
                    width: 'fit-content'
                }
            }}
        />
    );
}